# 🚀 Deploying the Beauney Project  

This guide provides step-by-step instructions to deploy the **Beauney** project and integrate it with **Middo** for form submissions and chat support.  

---

## 🛠 Step 1: Setting Up the Project Locally  

Before proceeding with deployment, it is essential to ensure that the project runs smoothly in a local environment.  

### 1️⃣ Installing Dependencies  

Navigate to the project directory and install the necessary packages:  

```bash
npm install
# or
yarn install
```

### 2️⃣ Running the Development Server  

To start the local server, use the following command:  

```bash
npm run dev
# or
yarn dev
```

Once the server is running, open **[http://localhost:3000](http://localhost:3000)** in a browser to verify that the application is functioning correctly.  

---

## 🌍 Step 2: Deploying the Beauney Project  

The recommended method for deploying a **Next.js** project is through **Vercel**.  

### 🔹 1. Deploying on Vercel  

1. Visit **[Vercel](https://vercel.com/)** and sign in.  
2. Click **New Project** and import the repository.  
3. Configure the environment variables as outlined in **Step 3**.  
4. Click **Deploy** and wait for the deployment process to complete.  

Once the deployment is successful, copy the **live URL** of the website, as it will be needed for the Middo integration.  

---

## 💬 Step 3: Integrating Middo  

Middo enables seamless form submissions and live chat functionality for customer interactions.  

### 🔹 1. Creating a Space in Middo  

1. Go to **[Middo](https://middo.app/)** and sign in using Google or create an account.  
2. Navigate to **[middo.app/spaces](https://middo.app/spaces)**.  
3. Click **Create a New Space**, provide a name, and proceed.  

### 🔹 2. Creating a Form  

1. In the sidebar, select **Forms**.  
2. Click **Create New Form** and add the required fields:  
   - **Consultation Fields** (Text Input)  
   - **Phone Number** (Text Input)  
   - **Message** (Text Input)  
3. Save the form and copy the generated **formId** for later use.  

### 🔹 3. Configuring the Chat Widget  

1. Navigate to **Settings → Conversation Extension → Create Extension**.  
2. Follow the setup process:  
   - **Step 1**: Add the deployed website's domain.  
   - **Step 2**: Configure the conversation settings.  
   - **Step 3**: Customize the chatbox appearance.  
3. Upon completion, Middo will provide a script similar to the one below:  

```html
<script src="https://middo.app/chat-widget.js"></script>
<script>
  window.onload = function () {
    ChatWidget.init(`https://middo.app/help-desk/extension-id`, 'default');
  };
</script>
```

This script should be added to the project's HTML file to enable the chat widget.  

---

## 🔑 Step 4: Configuring Environment Variables  

To ensure smooth integration with Middo, add the following environment variables to the **`.env.local`** file (or in **Vercel’s environment settings**):  

```env
NEXT_PUBLIC_SERVER_URL = https://middo.app
NEXT_PUBLIC_FORM_ID = your_form_id_here
NEXT_PUBLIC_CHAT_WIDGET_URL = "https://middo.app/chat-widget.js"
NEXT_PUBLIC_HELP_DESK_URL = "https://middo.app/help-desk/extension-id"
```

After making these changes, restart the server to apply them.  

---

## ✅ Step 5: Finalizing the Deployment  

If the project has not yet been deployed, push the latest changes to GitHub and redeploy via Vercel.  

Once the website is live, test the following functionalities to confirm everything is working correctly:  
✔️ Form submissions.  
✔️ Chat widget integration.  
✔️ General website functionality.  

---

## 🎉 Congratulations!  

The **Beauney** project is now successfully deployed and integrated with **Middo**. 🚀