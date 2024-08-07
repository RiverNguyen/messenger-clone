import SideBar from "@/app/components/sidebar/SideBar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
    const users = await getUsers();
    return (
        <SideBar>
            <div className="h-full">
                <UserList items={users} />
                {children}
            </div>
        </SideBar>
    );
};

export default UserLayout;
