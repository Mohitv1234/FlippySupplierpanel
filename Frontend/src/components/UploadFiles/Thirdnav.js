import React from 'react'
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import Stack from '@mui/material/Stack';
const Thirdnav = () => {
    return (
        <div className='row w-100' id='abc' >
            
            <div class="input-group col p-0" id='input-group1'>
                <span class="input-group-text" id="addon-wrapping" style={{ border: "none", backgroundColor: "white" }} ><i class="ri-search-line"></i></span>
                <input  type="text" className="form-control border-light w-100" placeholder="Search by name or image" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group col" id='input-group2'>
                <input type="date" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />

                <Stack direction="row" className='filterbtn-upload-file' spacing={.5}>
                    <Button size='small' style={{ color: "#344054", border: "1px solid #D0D5DD", textTransform: "capitalize" }} variant="outlined" startIcon={<FilterListIcon />}>
                        filter
                    </Button>
                    <Button size='small' style={{ color: "#344054", border: "1px solid #D0D5DD", textTransform: "capitalize" }} variant="outlined" endIcon={<LineStyleIcon />}>
                        <DashboardIcon style={{ fontSize: "1.2rem", color: "#344054" }} />
                    </Button>
                </Stack>
            </div>


        </div>
    )
}

export default Thirdnav