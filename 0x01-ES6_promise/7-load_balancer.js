export default async function loadBalancer(chinaDownload, USDownload) {
  // Promise.race return the value of the promise that resolves first
  return Promise.race([chinaDownload, USDownload]);
}
