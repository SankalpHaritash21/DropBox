import Dropzone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";

const Dashboard = () => {
  const { userId } = auth();
  return (
    <div>
      <Dropzone />
    </div>
  );
};

export default Dashboard;
