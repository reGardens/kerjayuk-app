import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { IconButton } from '@mui/material';

export default function Header() {
    return (
        <div className="flex justify-between items-center pt-7 pb-4">
            <p className="font-extrabold text-mainColor-100 bg-red text-3xl">KerjaYuk!</p>

            <Box sx={{ color: 'action.active' }}>
                <IconButton>
                    <Badge color="secondary" variant="dot" id="notification-custom">
                        <NotificationsNoneIcon sx={{
                            fontSize: 35,
                        }} />
                    </Badge>
                </IconButton>
            </Box>
        </div>
    )
}