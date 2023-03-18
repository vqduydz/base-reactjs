function importAll(r) {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key)));
    return images;
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default images;
