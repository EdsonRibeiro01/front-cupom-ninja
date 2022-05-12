import React from "react";
import { Card, Chip, CardContent, Button, Typography} from "@mui/material";
import "./index.css";
import ImgNinja from "../../assets/ninja.svg";
import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined';
import Avatar from '@mui/material/Avatar';

export default function Cupom({primeNinja, desconto, categoria, cupomNome}) {

    return (
        <div className="cupom">
            
                <Card className="card">
                    <CardContent>
                        {primeNinja ? <Chip className="chip-prime-ninja" avatar={<Avatar className="img-ninja" src={ImgNinja}/>} label="Prime Ninja" /> : ''}
                        <Typography variant='h3' sx={{fontWeight: "bold" }} component="div" align="center">{desconto}</Typography>
                        <Typography variant='h6' sx={{ marginTop: "25px", fontWeight: "bold" }} component="div">{categoria}</Typography>
                    </CardContent>
                </Card>
                <Card className="card card-right">
                    <CardContent>
                        <div>
                            <Typography variant='h5' component="div" align="center">
                                Use o Cupom
                            </Typography>
                            <Button onClick={() => {navigator.clipboard.writeText(cupomNome)}} variant='contained' sx={{ fontSize: 18}} className="botao-codigo">
                                <CopyAllOutlinedIcon/> {cupomNome}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            
        </div>
    );
}