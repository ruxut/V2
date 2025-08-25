self.__uv$config = {
    prefix: '/src/atomix/',
    bare:'https://b.shuttlemath.com/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/src/uv/uv.handler.js',
    bundle: '/src/uv/uv.bundle.js',
    config: '/src/uv/uv.config.js',
    sw: '/src/uv/uv.sw.js',
};
