import AdjustSharpIcon from '@mui/icons-material/AdjustSharp';
import { Grid } from '@mui/material';
const OrderCard = () => {
    return (
        <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70"
                            alt=""
                        />
                        <div className="ml-5 space-y-2">
                            <p>Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p>₹1099</p>

                </Grid>

                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustSharpIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                            <span>
                                Delivered on July 25
                            </span>
                        </p>
                        <p className='text-xs'>
                            Your item has been delivered.
                        </p>
                    </div>}
                    {false && <p>
                        <span>
                            Expected Delivery on July 25
                        </span>
                    </p>}
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderCard;