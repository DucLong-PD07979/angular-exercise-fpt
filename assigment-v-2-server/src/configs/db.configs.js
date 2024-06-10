import mongoose from "mongoose";

const GET_DB = async () => {
    try {
        await mongoose
            .connect(
                "mongodb+srv://longNguyen:brv0O7Vm2q6AKLOa@atlascluster.ekktt8n.mongodb.net/quanlinhansu?retryWrites=true&w=majority&appName=AtlasCluster"
            )

            .then((res) => {
                console.log("Connected!");
            });
    } catch (error) {
        console.log(error);
    }
};

export { GET_DB };
