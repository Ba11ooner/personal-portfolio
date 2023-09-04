import React from "react";
import {Grid, Typography} from "@mui/material";
const border = {
    // border: "solid"
}
const Empty = () => {
    return (
        <div style={{
            width:"500px"
        }}>
            <Grid container spacing={0}  style={border}>
                <Grid item xs={12} sm={12} md={6} lg={6}  style={border}>
                    <Typography variant="h6" color="primary">
                        2020.09 ~ 至今
                    </Typography>
                </Grid >
                <Grid item xs={12} sm={12} md={6} lg={6}  style={border}>
                    <Typography variant="h6" color="primary"  style={border}>
                        暂无
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Empty;