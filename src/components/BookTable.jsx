import MUIDataTable from "mui-datatables";
import BookImage from "./BookImage.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function BookTable({ data }) {

    const columns = [
        {
            name: "bookImage",
            label: "Image",
            options: {
                customBodyRender: () => {
                    return (
                        <img src={BookImage} className="center" />
                    )
                }
            }
        },
        {
            name: "title",
            label: "Title",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "author",
            label: "Author",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "year",
            label: "Year",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "isbn",
            label: "ISBN",
            options: {
                filter: true,
                sort: true,
            }
        },
    ]

    const options = {
        filterType: "dropdown", //
        selectableRows: false
    }

    const getMuiTheme = () => createTheme({
        components: {
            MUIDataTableBodyCell: {
                styleOverrides: {
                    root: {
                        textAlign:"center"
                    }
                }
            },

            MUIDataTableSelectCell: {
                root: {
                    display: 'none'
                }
            },


            MUIDataTableCell: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#bbdefb",
                    }
                }
            },

            MUIDataTableHeadCell: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#bbdefb"
                    },

                    data:{
                        fontWeight:"bold",
                        textAlign:"center",
                        alignItems:"center",
                        color:"black",
                        display:"block",
                        padding:"auto"
                    }

                }
            }
        }
    });

    return (
        <div style={{ maxWidth: '100%' }}>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    columns={columns}
                    title={''}
                    data={data}
                    options={{ selectableRows: false }}
                />
            </ThemeProvider>
        </div>

    );
}
