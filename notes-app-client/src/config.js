const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-bao",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jcentwq22d.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ZrdNix6Rz",
    APP_CLIENT_ID: "6gh3315m1liiqpibmpg2us3fo7",
    IDENTITY_POOL_ID: "us-east-2:99c91e40-984d-42d3-bde0-a6df6e5c7419",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51IBsvDJLPvrnNRso6waNyXxvlSgHTgwR95siXMFYmR3hfSpPRj2ALN8g7KIJqVJj0OzRrc0gfIvCdJT9vQleHYJy00jSVPRIxR",
};

export default config;
