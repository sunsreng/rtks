import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { login, loginAsync, selectUserId } from './user.slice';

export default function User() {
  const state = useAppSelector((state) => state);
  const { auth } = useAppSelector((state) => state);
  const { user } = useAppSelector((state) => state.auth);
  const { id } = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{state.auth.user.id === '' ? 'NA' : state.auth.user.id}</h1>
      <h1>{auth.user.id === '' ? 'NA' : auth.user.id}</h1>
      <h1>{user.id === '' ? 'NA' : user.id}</h1>
      {auth.loading ? <h1>Loading...</h1> : <h1>{id === '' ? 'NA' : id}</h1>}
      <button onClick={() => dispatch(login({ id: '1', name: 'Auth' }))}>Login</button>
      <button onClick={() => dispatch(loginAsync({ id: '1', name: 'Auth' }))}>Login Async</button>
    </>
  );
}
