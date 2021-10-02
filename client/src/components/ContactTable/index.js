import React from 'react'
import { Container, Table, Heading } from './ContactTableElements'


const ContactTable = () => {

    const styleHeading = {
        color: "#fff",
        textAlign: "center",
    }

    const styleTable = {
        borderStyle: "ridge",
        borderWidth: "3px",
        borderColor: "#102f63",
    }

    const styleTdBorder = {
        borderBottom: "2px solid #102f63",
        borderRight: "2px solid #102f63",
        padding: "10px 10px 10px 10px",

    }


    return (
        <Container>
            <Heading>
                <h2 style={styleHeading}>Contact Us</h2>
            </Heading>

            <Table style={styleTable}>
                <tr>
                    <td rowspan="3" style={styleTdBorder}>For refund of unsuccessful purchases and card charging issues</td>
                    <td  style={styleTdBorder}>VISA/MASTER Cards</td>
                    <td  style={styleTdBorder}>N/A</td>
                </tr>
                
                <tr>
                    <td style={styleTdBorder}>bKash</td>
                    <td  style={styleTdBorder}>16247</td>
                </tr>

                <tr>
                    <td style={styleTdBorder}>Rocket / DBBL Nexus Cards</td>
                    <td  style={styleTdBorder}>16216</td>
                </tr>
                

                <tr>
                    <td style={styleTdBorder}>For refund of successfully purchased tickets</td>
                    <td colspan="2"  style={styleTdBorder}>Visit your originating station ( Name of the Station From which you wanted to travel ) and contact the refund counter</td>
                </tr>



                <tr>
                    <td style={styleTdBorder}>For Technical Support</td>
                    <td style={styleTdBorder}>Tech Support Team</td>
                    <td  style={styleTdBorder}>
                        railway-eticket@gmail.com
                        <br></br>
                        +880-1234567890
                    </td>
                </tr>
            </Table>



        </Container >
    )
}

export default ContactTable