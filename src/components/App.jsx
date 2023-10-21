import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsPage } from './Page/ContactsPage/ContactsPage';
import { LoginPage } from './Page/LoginPage/LoginPage';
import { SignUpPage } from './Page/SignUpPage/SingUpPage';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/" component={<ContactsPage />} />
              }
            />
            <Route
              path="signup"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<SignUpPage />}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      <GlobalStyle />
    </>
  );
};