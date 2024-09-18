# Introduction 

This is the frontend in React JS for a program that utilizes natural language models (LLMs) based on the Azure OpenAI API to perform various tasks related to data segmentation, confirmation, and selection. It is built using the LangChain library, which facilitates interaction and management of language models.

## Features

- **Integration with Azure OpenAI**: Connects to GPT-3.5 and GPT-4 deployments on Azure, enabling complex tasks based on natural language.
- **Processing Chains**: Uses `LLMChain` to manage processing flows and custom prompts for efficient querying and segmentation.
- **Vector Storage and Search**: Implements **FAISS** for storing vector representations of data and performing searches based on semantic similarity.
- **Custom Prompts**: Structures interactions with the model using prompts that handle various tasks like segmentation, option confirmation, and data selection.

## Installation

1. Clone this repository.
2. Install the dependencies:
   nodejs: [Node installation](https://nodejs.org/en/download/package-manager)
3. Install libraries:
   ```sh
    npm install
    ```

## Usage

1. **Run the main application**:
    ```sh
    npm run dev
    ```
2. **Open in your web browser the local url**:
    ```sh
    http://localhost:3000
    ```

## Contribute

Feel free to open issues or submit pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License.
