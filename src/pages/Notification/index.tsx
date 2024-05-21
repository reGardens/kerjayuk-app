import Layout from "../Layout";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StickyHeader from "../../components/StickyHeader";
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Notification() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/")
    }

    return (
        <Layout>
            <div className="min-h-screen">
                <StickyHeader>
                    <div className="flex gap-2 items-center pt-5 pb-4 px-5">
                        <IconButton onClick={handleBack}>
                            <ArrowBackIcon className="text-black !text-4xl" />
                        </IconButton>

                        <p className="font-extrabold text-mainColor-100 bg-red text-3xl">
                            Notification
                        </p>
                    </div>
                </StickyHeader>
            </div>
        </Layout >
    )
}