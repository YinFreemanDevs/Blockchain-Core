import Block from './block'

describe('Block', ()=> {

    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(()=> {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 'test-data';
        hash = 'hash';

    })

    it('create an instance with parameters', ()=>{
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    })

    it('use static mine()', ()=>{
        const block = Block.mine(previousBlock,data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash)
        expect(data).toEqual(data)
    })

    it('use static hash()', ()=> {
        hash = Block.hash(timestamp, previousBlock.hash,data);
        const hashOutput = '23ca2eac30a457b193f77ead2fed9e4cc437f07e6f68451e93938151c0613845'
        expect(hash).toEqual(hashOutput);
    });

    it('use toString()', ()=>{
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    })
})