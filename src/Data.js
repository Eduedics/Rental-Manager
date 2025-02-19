const estatesData = [
    {
        id: "1",
        name: "Estate A",
        location: "City Center",
        image: "/images/estate-a.jpg",
        description: "A luxurious estate...",
        blocks: [
            {
                id: "A",
                name: "Block A",
                floors: [
                    {
                        id: "1",
                        name: "Floor 1",
                        rooms: [
                            { id: "101", number: "1", description: "1 Bedroom", amenities: ["AC", "Hot Shower"], booking: "Monthly rent $500",images:['iphoto.jpg','3photo.jpg'] },
                            { id: "102", number: "2", description: "2 Bedroom", amenities: ["AC", "Hot Shower"], booking: "Monthly rent $700",images:['iphoto.jpg','3photo.jpg'] }
                        ]
                    }
                ]
            },
            {
                id: "A",
                name: "Block A",
                floors: [
                    {
                        id: "1",
                        name: "Floor 1",
                        rooms: [
                            { id: "101", number: "1", description: "1 Bedroom", amenities: ["AC", "Hot Shower"], booking: "Monthly rent $500",images:['iphoto.jpg','3photo.jpg'] },
                            { id: "102", number: "2", description: "2 Bedroom", amenities: ["AC", "Hot Shower"], booking: "Monthly rent $700",images:['iphoto.jpg','3photo.jpg'] }
                        ]
                    }
                ]
            }
        ]
    }
];
export default estatesData