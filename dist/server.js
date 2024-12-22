"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// Load environment variables
dotenv_1.default.config();
// Initialize Express
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cors_1.default)({ origin: 'http://localhost:5175' }));
// Serve static files from the "public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Define the port
const PORT = process.env.PORT || 1000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
