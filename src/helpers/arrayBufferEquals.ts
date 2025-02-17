export default function arrayBufferEquals(
  arrayBuffer1: ArrayBuffer,
  arrayBuffer2: ArrayBuffer
) {
  if (arrayBuffer1.byteLength !== arrayBuffer2.byteLength) return false;

  const view1 = new Uint8Array(arrayBuffer1);
  const view2 = new Uint8Array(arrayBuffer2);

  for (let i = 0; i < view1.length; i++) {
    if (view1[i] !== view2[i]) return false;
  }

  return true;
}
