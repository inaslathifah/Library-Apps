import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { useToken } from "@/utils/contexts/token";

const Profile = () => {
  const { user } = useToken();

  return (
    <Layout centerX>
      {user ? (
        <div className="w-1/2 flex flex-col items-center gap-5 mt-10">
          <div className="w-1/3">
            <img
              className="rounded-full w-full aspect-square"
              src={user.profile_picture}
              alt={user.full_name}
            />
          </div>
          <p className="text-2xl font-semibold tracking-wide text-black dark:text-white">
            {user.full_name}
          </p>
          <Link to="/profile/edit-profile">
            <Button className="bg-rose-300 text-black hover:bg-slate-200">
              Edit Profile
            </Button>
          </Link>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </Layout>
  );
};

export default Profile;
