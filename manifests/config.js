module.exports.config = {
  base: {
    dataSources: [
      {
        name: "pod",
        template: "pod-ds.yaml",
        address: "0xB00B5D137709a301283E225e536E85882Cfadd55",
        startBlock: 20036664,
      },
    ],
    templates: [],
  },
  "base-sepolia": {
    dataSources: [
      {
        name: "pod",
        template: "pod-ds.yaml",
        address: "0x2b530b015a096267d71ed54d797238479e817ab5",
        startBlock: 14175025,
      },
    ],
    templates: [],
  },
};
