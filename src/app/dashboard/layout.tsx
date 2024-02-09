import {Suspense} from "react";
import Loading from "@/app/dashboard/(list)/current-list/loading";

const DashboardLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <header>
                Header Testing..
            </header>
            {children}
        </div>
    )
};
export default DashboardLayout;