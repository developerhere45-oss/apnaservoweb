import { requireAdmin } from '@/lib/admin-auth';
import AdminDashboard from './AdminDashboard';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const authenticated = await requireAdmin();
  return <AdminDashboard initialAuthenticated={authenticated} />;
}
