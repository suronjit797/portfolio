import { Box, Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


const Contact = () => {
    return (
        <Box sx={{
            width: '550px', maxWidth: '100%', mx: "auto"
        }}>
            <form>
                <TextField
                    id="name"
                    label="Name"
                    type='text'
                    variant="filled"
                    color='secondary'
                    fullWidth
                    autoComplete='off'
                    sx={{
                        display: 'block',
                        my: 5,
                        color: '#fff',
                        '& .MuiInputBase-input': { color: '#fff' },
                        '& label': { color: '#fff' },
                        // '& .css-l8bamk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#3f50b5' },
                        '& .MuiInputBase-root::before': { borderColor: '#fff !important' },
                    }}
                />
                <TextField
                    id="email"
                    label="Email"
                    type='email'
                    variant="filled"
                    color='secondary'
                    fullWidth
                    autoComplete='off'
                    sx={{
                        display: 'block',
                        my: 5,
                        color: '#fff',
                        '& .MuiInputBase-input': { color: '#fff' },
                        '& label': { color: '#fff' },
                        // '& .css-l8bamk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#3f50b5' },
                        '& .MuiInputBase-root::before': { borderColor: '#fff !important' },
                    }}
                />
                <TextField
                    id="message"
                    label="Message"
                    variant="filled"
                    color='secondary'
                    multiline
                    rows={4}
                    fullWidth
                    autoComplete='off'
                    sx={{
                        display: 'block',
                        my: 5,
                        color: '#fff',
                        '& .MuiInputBase-input': { color: '#fff' },
                        '& label': { color: '#fff' },
                        // '& .css-l8bamk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': { color: '#3f50b5' },
                        '& .MuiInputBase-root::before': { borderColor: '#fff !important' },
                    }}
                />
                <Button type='submit' variant="outlined" color="info" size='large' endIcon={<SendIcon />}> Send Message </Button>
            </form>
        </Box>
    );
};

export default Contact;