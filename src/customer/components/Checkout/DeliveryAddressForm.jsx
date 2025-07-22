import { Box, Button, Grid, TextField } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

const DeliveryAddressForm = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer" >
                        <AddressCard />
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ mt: 2, bgcolor: 'rgb(145, 85, 253)' }}
                        >
                            Deliver Here
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField required
                                        id='FirstName'
                                        name='FirstName'
                                        label='First Name'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required
                                        id='LastName'
                                        name='LastName'
                                        label='Last Name'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DeliveryAddressForm;
