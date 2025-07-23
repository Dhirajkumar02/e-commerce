import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";


const DeliveryAddressForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        setFormData({
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: ""
        });
    };

    return (

        <div style={{
            margin: "20px"
        }}>

            <Grid className=" grid grid-cols-6 gap-2">
                <div
                    className="col-start-1 col-end-3 border rounded-e-md shadow-md  overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard />
                        <Button
                            sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                            size="large"
                            variant="contained"
                        >
                            Deliver Here
                        </Button>

                    </div>
                </div>


                <div
                    className="col-start-3 col-end-7 border rounded-e-md shadow-md">
                    <Box sx={{ borderRadius: 2, p: 3 }}>
                        <form action="" onSubmit={handleSubmit}>
                            <Grid className="grid grid-cols-12 gap-2">
                                <input type="text" style={{ height: "50px", paddingLeft: "10px", borderRadius: "5px", border: "2px solid #d7dbd7", color: "#3b3d3b" }} placeholder="First name* " name="firstName" required className="col-start-1 col-end-6 " value={formData.firstName} onChange={handleChange} />
                                <input type="text" style={{ height: "50px", paddingLeft: "10px", borderRadius: "5px", border: "2px solid #d7dbd7", color: "#3b3d3b" }} placeholder="Last name*" name="lastName" required className="col-start-6 col-end-12 " value={formData.lastName} onChange={handleChange} />
                                <textarea style={{ paddingLeft: "10px", borderRadius: "5px", border: "2px solid #d7dbd7", color: "#3b3d3b" }} className="col-start-1 col-end-12" rows={4} placeholder="Address*" name="address" value={formData.address} onChange={handleChange} />
                                <input type="text" style={{ height: "50px", paddingLeft: "10px", borderRadius: "5px", border: "2px solid #d7dbd7", color: "#3b3d3b" }} required className="col-start-1 col-end-6 " placeholder="City*" name="city" value={formData.city} onChange={handleChange} />
                                <input type="text" style={{ height: "50px", paddingLeft: "10px", borderRadius: "5px", border: "2px solid #d7dbd7", color: "#3b3d3b" }} required className="col-start-6 col-end-12 " placeholder="state/province/Region*" name="state" value={formData.state} onChange={handleChange} />
                                <input type="text" style={{ height: "50px", paddingLeft: "10px", borderRadius: "5px", border: "2px solid #d7dbd7", color: "#3b3d3b" }} required className="col-start-1 col-end-6 " placeholder="Zip/Postal Code*" name="zip" value={formData.zip} onChange={handleChange} />
                                <input type="tel" max={10} style={{ height: "50px", paddingLeft: "10px", borderRadius: "5px", border: "2px solid #d7dbd7", color: "#3b3d3b" }} required className="col-start-6 col-end-12 " placeholder="Phone Number*" name="phone" value={formData.phone} onChange={handleChange} />

                                <Button className="col-span-3"
                                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                                    size="large"
                                    variant="contained"
                                >
                                    Deliver Here
                                </Button>                            </Grid>
                        </form>
                    </Box>



                </div>

            </Grid>
        </div>
    );
};

export default DeliveryAddressForm;
