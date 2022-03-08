const CONTACT_ADDRESS = '0x4ECbd0Aa98D029CFC75694784C6Eecf4f85644dB';

const CONTACT_ABI = [
    [
        {
            constant: true,
            inputs: [
                {
                    name: '_owner',
                    type: 'address',
                },
            ],
            name: 'balanceOf',
            outputs: [
                {
                    name: 'balance',
                    type: 'uint256',
                },
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        },
    ]
];

module.exports = {
    CONTACT_ABI,
    CONTACT_ADDRESS,
};
