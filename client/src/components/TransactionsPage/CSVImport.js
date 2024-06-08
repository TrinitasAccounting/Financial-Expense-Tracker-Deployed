
import DromoUploader from "dromo-uploader-react"


function CSVImporter() {

    return (

        <DromoUploader
            licenseKey="3badce43-0fc9-4440-8f9d-840f2de07713"
            fields={[
                {
                    label: "Date",
                    key: "date",
                },
                {
                    label: "Description",
                    key: "description",
                },
                // {
                //     label: "Amount",
                //     key: "amount",

                // },
                // {
                //     label: "Category",
                //     key: "category",
                // },
            ]}
            settings={{
                importIdentifier: "Contacts",
                developmentMode: true,
            }}
            user={{
                id: "1",
                name: "Jane Doe",
                email: "jane@dromo.io",
                companyId: "Dromo",
                companyName: "12345",
            }}
            onResults={(response, metadata) =>
                console.log(response, metadata)

            }
        >
            Import from CSV File
        </DromoUploader>


    )
}


export default CSVImporter;

