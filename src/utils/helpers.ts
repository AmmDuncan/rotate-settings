/**
 * Converts a File object to a base64 representation.
 *
 * @param {File} file - the File object to convert
 * @returns a Promise that resolves with the base64 representation of the File
 */
export function convertFileToBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
