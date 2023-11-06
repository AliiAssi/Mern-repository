const messageModel = require("../Models/messageModel");

// Create message
const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body;

    try {
        const message = new messageModel({
            chatId,
            senderId,
            text,
        });

        const response = await message.save();
        res.status(201).json(response); // Use 201 for resource creation.
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Messages (placeholder)
const getMessages = async (req, res) => {
    const {chatId} = req.params;
    try{
        const messages = await messageModel.find({chatId})
        res.status(200).json(messages);

    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}
module.exports = {
    createMessage,
    getMessages, // Add this to export the getMessages function.
};
