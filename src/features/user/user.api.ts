import { IUser } from './user.slice';

export function fetchUser(user: IUser) {
  return new Promise<{ data: IUser }>((resolve) => setTimeout(() => resolve({ data: { id: '2', name: 'Sok' } }), 1500));
}
