import React from "react";
import { Card, CardHeader, CardContent, Button, Typography} from "@mui/material";
import "./index.css";
import ImgNinja from "../../assets/ninja.jpg";

export default function Cupom() {
    return (
        <div className="cupom">
            
                <Card className="card">
                    <CardContent>
                        <img className="img-ninja-prime" src={ImgNinja}></img>
                        <Typography variant='h3' sx={{ color: "white", fontWeight: "bold" }} component="div" align="center">5%</Typography>
                        <Typography variant='h6' sx={{ marginTop: "25px", fontWeight: "bold", color: "white" }} component="div">Periférico {'>'} Mouse</Typography>
                    </CardContent>
                </Card>
                <Card className="card card-right">
                    <CardContent>
                        <div>
                            <Typography variant='h5' sx={{ color: "white" }} component="div" align="center">
                                Use o Cupom
                            </Typography>
                            <Button onClick={() => window.location.href = "https://www.kabum.com.br"} variant='contained' sx={{ fontSize: 18, color: "white" }} className="botao-codigo">
                                MOUSE52
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            
        </div>
    );
}