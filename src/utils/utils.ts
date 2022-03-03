export const mapComponents = (cmp: any[]) => {
  return cmp.reduce((total, item) => [...item.children, ...total], [])
}
