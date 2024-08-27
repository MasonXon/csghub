export const endpoints = {
  title: "Inference Endpoint",
  resourceType: 'Resource Type',
  replica: "Replica",
  summary: 'Summary',
  detail: {
    endpointUrl: 'Inference Endpoint URL',
    modelId: 'Model ID',
    parameters: 'Parameters',
    currentEndpointReplica: 'Endpoint Replica',
    cloudResource: 'Cloud Resource',
    endpointStatus: 'Endpoint Status'
  },
  new: {
    title: "Create a new endpoint",
    desc: "Deploy your model to an endpoint",
    name: "Endpoint name",
    modelId: "Model ID",
    modelIdTip: "Please enter Model ID",
    minReplica: "Minimum number of replicas",
    maxReplica: "Maximum number of replicas",
    resource: "Resource configuration",
    resourceTip1: "You can switch to different cloud resources at any time.",
    resourceTip2: "After switching to paid resources, you will be charged based on the length of use.",
    framework: "Framework",
    cluster: "Region",
    public: "Public",
    publicDesc: "Anyone on the internet can see this endpoint.",
    private: "Private",
    privateDesc: "Only you (personal) or members of your organization can see this endpoint.",
    createEndpoint: "Create",
    createSuccess: "Endpoint created successfully",
    dedicated: "Dedicated endpoint",
    tip: "Applied to the endpoint, cannot be changed after creation",
    createFail: "Failed to create endpoint",
  },
  settings: {
    stop: "Stop",
    restart: "Restart",
    restartEndpoint: "Restart Endpoint",
    stopEndpoint: "Stop Endpoint",
    delete: "Delete",
    deleteEndpoint: "Delete Endpoint",
    delTips: "This operation",
    delTips2: "Undo, this will permanently delete",
    delTips3: "the endpoint and all its files.",
    confirmDel: "I understand and confirm deletion",
    namespaceName: "Endpoint Name/ID",
    toggleStatusSuccess: 'Updated, please wait Endpoint status change',
    statusText: "The current Endpoint is now",
    status: "Status",
    changeVisibility: "Change Endpoint visibility",
    visibility: "Endpoint visibility",
    privateVis: "Only creator or members of your organization can see",
    publicVis: "Anyone can see this endpoint",
    privateInfo: ", only the creator or organization admin can update",
    publicInfo: ", visible to anyone on the internet.",
    resource: "Resource configuration",
    resourceTip: "You can switch to different cloud resources at any time. After switching to paid resources, you will be charged based on the length of use.",
    framework: "Framework",
    currentFramework: 'Current Framework',
    maxReplica: "Maximum number of replicas",
    minReplica: "Minimum number of replicas",
    currentMaxReplica: "Current maximum number of replicas",
    currentMinReplica: "Current minimum number of replicas",
  },
  playground: {
    title: "Playground",
    parameters: "Parameters",
    generation: "Text Generation",
    json: "JSON Output",
    maximum: "Maximum",
    send: "Send",
    test: "Inference API",
    api: "Send requests to endpoint",
    useToken: 'Use my token'
  }
}