// /app/dashboard/page.tsx

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect('/auth/login');
  console.log('session', session);
  return <div>Welcome {session.user?.email}</div>;
}
