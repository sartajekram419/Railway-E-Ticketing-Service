import React from 'react'
import { Container, Table, Heading } from './ContactTableElements'


const ContactTable = () => {

    const styleHeading = {
        color: "#fff",
        textAlign: "center",
    }

    const styleHr = {

        color: "#000",
        height: "3px",
        backgroundColor: "#000",

    }

    const styleTable = {
        borderStyle: "ridge",
        borderWidth: "3px",
        borderColor: "#102f63",

    }

    const styleTr = {
        borderBottom: "1px solid #000",

    }

    const styleTd = {
        height: "80px",
        padding: "0px 3px 0px 3px"
    }

    const styleTdd = {
        height: "50px",
        padding: "0px 3px 0px 3px"
    }

    const styleTdBorder = {
        borderRight: "1px solid #000",
        padding: "0px 3px 0px 3px",
        height: "60px",

    }


    return (
        <Container>
            <Heading>
                <h2 style={styleHeading}>Contact Us</h2>
            </Heading>


            <br>
            </br>

            <Table style={styleTable}>
                <tr style={styleTr}>
                    <td style={styleTd} style={styleTdBorder}>For refund of unsuccessful purchases and card charging issues</td>

                    <td style={styleTd} style={styleTdBorder}>
                        <tr><td style={styleTdd}>VISA/MASTER Cards</td></tr> <hr style={styleHr}></hr>
                        <tr><td style={styleTdd}>Rocket / DBBL Nexus Cards</td></tr> <hr style={styleHr}></hr>
                        <tr><td style={styleTdd}>bKash</td></tr>
                    </td>


                    <td>
                        <tr><td style={styleTdd}>N/A</td></tr> <hr style={styleHr}></hr>
                        <tr><td style={styleTdd}>16216</td></tr> <hr style={styleHr}></hr>
                        <tr><td style={styleTdd}>16247</td></tr>
                    </td>

                </tr>



                <tr style={styleTr}>
                    <td style={styleTdBorder}>For refund of successfully purchased tickets</td>
                    <td colSpan="2" style={styleTd}>Visit your originating station ( Name of the Station From which you wanted to travel ) and contact the refund counter</td>

                </tr>



                <tr>

                    <td style={styleTdBorder}>For Technical Support</td>
                    <td style={styleTdBorder}>Tech Support Team</td>
                    <td style={styleTd}>
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