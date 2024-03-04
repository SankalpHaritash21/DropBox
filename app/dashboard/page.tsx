import { auth } from "@clerk/nextjs";

const Dashboard = () => {
  const { userId } = auth();
  return <div>Dropbok</div>;
};

export default Dashboard;
