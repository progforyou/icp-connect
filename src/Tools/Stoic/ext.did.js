export const idlFactory = ({IDL}) => {
    const TokenIdentifier = IDL.Text;
    const AccountIdentifier = IDL.Text;
    const User = IDL.Variant({
        'principal': IDL.Principal,
        'address': AccountIdentifier,
    });
    const Request__1 = IDL.Record({
        'token': TokenIdentifier,
        'owner': User,
        'spender': IDL.Principal,
    });
    const Balance = IDL.Nat;
    const CommonError = IDL.Variant({
        'InvalidToken': TokenIdentifier,
        'Other': IDL.Text,
    });
    const Response__1 = IDL.Variant({'ok': Balance, 'err': CommonError});
    const SubAccount = IDL.Vec(IDL.Nat8);
    const ApproveRequest = IDL.Record({
        'token': TokenIdentifier,
        'subaccount': IDL.Opt(SubAccount),
        'allowance': Balance,
        'spender': IDL.Principal,
    });
    const ICP = IDL.Record({'e8s': IDL.Nat64});
    const Legend = IDL.Record({
        'ink': IDL.Text,
        'back': IDL.Text,
        'border': IDL.Text,
    });
    const Result = IDL.Variant({'ok': IDL.Null, 'err': IDL.Text});
    const Time = IDL.Int;
    const Listing__1 = IDL.Record({
        'subaccount': IDL.Opt(SubAccount),
        'locked': IDL.Opt(Time),
        'seller': IDL.Principal,
        'price': IDL.Nat64,
    });
    const DetailsResponse = IDL.Variant({
        'ok': IDL.Tuple(AccountIdentifier, IDL.Opt(Listing__1)),
        'err': CommonError,
    });
    const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
    const Request = IDL.Record({
        'url': IDL.Text,
        'method': IDL.Text,
        'body': IDL.Vec(IDL.Nat8),
        'headers': IDL.Vec(HeaderField),
    });
    const StreamingCallbackToken = IDL.Record({
        'key': IDL.Text,
        'index': IDL.Nat,
        'content_encoding': IDL.Text,
    });
    const StreamingCallbackResponse = IDL.Record({
        'token': IDL.Opt(StreamingCallbackToken),
        'body': IDL.Vec(IDL.Nat8),
    });
    const StreamingCallback = IDL.Func(
        [StreamingCallbackToken],
        [StreamingCallbackResponse],
        ['query'],
    );
    const StreamingStrategy = IDL.Variant({
        'Callback': IDL.Record({
            'token': StreamingCallbackToken,
            'callback': StreamingCallback,
        }),
    });
    const Response = IDL.Record({
        'body': IDL.Vec(IDL.Nat8),
        'headers': IDL.Vec(HeaderField),
        'streaming_strategy': IDL.Opt(StreamingStrategy),
        'status_code': IDL.Nat16,
    });
    const Token = IDL.Record({
        'owner': AccountIdentifier,
        'createdAt': IDL.Int,
        'txId': IDL.Text,
    });
    const ListRequest = IDL.Record({
        'token': TokenIdentifier,
        'from_subaccount': IDL.Opt(SubAccount),
        'price': IDL.Opt(IDL.Nat64),
    });
    const ListResponse = IDL.Variant({'ok': IDL.Null, 'err': CommonError});
    const TokenIndex = IDL.Nat32;
    const Metadata__1 = IDL.Variant({
        'fungible': IDL.Record({
            'decimals': IDL.Nat8,
            'metadata': IDL.Opt(IDL.Vec(IDL.Nat8)),
            'name': IDL.Text,
            'symbol': IDL.Text,
        }),
        'nonfungible': IDL.Record({'metadata': IDL.Opt(IDL.Vec(IDL.Nat8))}),
    });
    const ListingsResponse = IDL.Vec(
        IDL.Tuple(TokenIndex, Listing__1, Metadata__1)
    );
    const LockResponse = IDL.Variant({
        'ok': AccountIdentifier,
        'err': CommonError,
    });
    const Metadata = IDL.Variant({
        'fungible': IDL.Record({
            'decimals': IDL.Nat8,
            'metadata': IDL.Opt(IDL.Vec(IDL.Nat8)),
            'name': IDL.Text,
            'symbol': IDL.Text,
        }),
        'nonfungible': IDL.Record({'metadata': IDL.Opt(IDL.Vec(IDL.Nat8))}),
    });
    const MetadataResponse = IDL.Variant({
        'ok': Metadata,
        'err': CommonError,
    });
    const Result_6 = IDL.Variant({'ok': IDL.Nat, 'err': IDL.Text});
    const TxId = IDL.Nat32;
    const TokenIndex__1 = IDL.Nat32;
    const Lock = IDL.Record({
        'id': TxId,
        'token': TokenIndex__1,
        'buyerAccount': IDL.Text,
        'memo': IDL.Nat64,
        'lockedAt': Time,
        'buyer': IDL.Principal,
    });
    const BlockHeight = IDL.Nat64;
    const Purchase = IDL.Record({
        'id': TxId,
        'token': TokenIndex__1,
        'buyerAccount': IDL.Text,
        'memo': IDL.Nat64,
        'blockheight': BlockHeight,
        'closedAt': Time,
        'lockedAt': Time,
        'buyer': IDL.Principal,
        'price': IDL.Nat64,
    });
    const NNSTransaction = IDL.Record({
        'from': IDL.Text,
        'memo': IDL.Nat64,
        'blockheight': IDL.Nat64,
        'timestamp': Time,
        'amount': IDL.Nat64,
    });
    const Refund = IDL.Record({
        'id': TxId,
        'buyer': IDL.Text,
        'transactions': IDL.Record({
            'original': NNSTransaction,
            'refund': NNSTransaction,
        }),
    });
    const Result_5 = IDL.Variant({'ok': TxId, 'err': IDL.Text});
    const Result_4 = IDL.Variant({'ok': TokenIndex, 'err': IDL.Text});
    const Result_3 = IDL.Variant({'ok': IDL.Null, 'err': CommonError});
    const Result_2 = IDL.Variant({
        'ok': IDL.Vec(TokenIndex),
        'err': CommonError,
    });
    const Listing = IDL.Record({
        'locked': IDL.Opt(IDL.Int),
        'seller': IDL.Principal,
        'price': IDL.Nat64,
    });
    const TokenExt = IDL.Tuple(
        TokenIndex,
        IDL.Opt(IDL.Vec(Listing)),
        IDL.Opt(IDL.Vec(IDL.Nat8)),
    );
    const Result_1 = IDL.Variant({
        'ok': IDL.Vec(TokenExt),
        'err': CommonError,
    });
    const Memo = IDL.Vec(IDL.Nat8);
    const TransferRequest = IDL.Record({
        'to': User,
        'token': TokenIdentifier,
        'notify': IDL.Bool,
        'from': User,
        'memo': Memo,
        'subaccount': IDL.Opt(SubAccount),
        'amount': Balance,
    });
    const TransferResponse = IDL.Variant({
        'ok': Balance,
        'err': IDL.Variant({
            'CannotNotify': AccountIdentifier,
            'InsufficientBalance': IDL.Null,
            'InvalidToken': TokenIdentifier,
            'Rejected': IDL.Null,
            'Unauthorized': AccountIdentifier,
            'Other': IDL.Text,
        }),
    });
    const Tag = IDL.Text;
    const FilePath = IDL.Text;
    const Meta = IDL.Record({
        'name': IDL.Text,
        'tags': IDL.Vec(Tag),
        'description': IDL.Text,
        'filename': FilePath,
    });
    const LegendsNFT = IDL.Service({
        'addAdmin': IDL.Func([IDL.Principal], [], []),
        'address': IDL.Func([], [IDL.Vec(IDL.Nat8), IDL.Text], ['query']),
        'allowance': IDL.Func([Request__1], [Response__1], []),
        'approve': IDL.Func([ApproveRequest], [], []),
        'balance': IDL.Func([], [ICP], []),
        'configureLegends': IDL.Func([IDL.Vec(Legend)], [Result], []),
        'details': IDL.Func([TokenIdentifier], [DetailsResponse], ['query']),
        'http_request': IDL.Func([Request], [Response], ['query']),
        'isAdmin': IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
        'ledgerBackup': IDL.Func([], [IDL.Vec(IDL.Opt(Token))], ['query']),
        'ledgerReassign': IDL.Func(
            [TokenIdentifier, User, IDL.Text],
            [Result],
            [],
        ),
        'ledgerRestore': IDL.Func([IDL.Vec(IDL.Opt(Token))], [Result], []),
        'list': IDL.Func([ListRequest], [ListResponse], []),
        'listings': IDL.Func([], [ListingsResponse], ['query']),
        'lock': IDL.Func(
            [TokenIdentifier, IDL.Nat64, AccountIdentifier, IDL.Vec(IDL.Nat8)],
            [LockResponse],
            [],
        ),
        'metadata': IDL.Func([TokenIdentifier], [MetadataResponse], ['query']),
        'mint': IDL.Func([User], [Result_6], []),
        'paymentsBackup': IDL.Func(
            [],
            [
                IDL.Record({
                    'locks': IDL.Vec(IDL.Tuple(TxId, Lock)),
                    'purchases': IDL.Vec(IDL.Tuple(TxId, Purchase)),
                    'refunds': IDL.Vec(IDL.Tuple(TxId, Refund)),
                    'nextTxId': TxId,
                }),
            ],
            ['query'],
        ),
        'paymentsGetAvailable': IDL.Func([], [IDL.Nat], ['query']),
        'paymentsGetPrice': IDL.Func([], [IDL.Nat64], ['query']),
        'paymentsLock': IDL.Func([IDL.Nat64], [Result_5], []),
        'paymentsNotify': IDL.Func([IDL.Nat64, BlockHeight], [Result_4], []),
        'paymentsProcessRefunds': IDL.Func(
            [IDL.Vec(NNSTransaction)],
            [Result],
            [],
        ),
        'paymentsRestore': IDL.Func(
            [
                IDL.Record({
                    'locks': IDL.Opt(IDL.Vec(IDL.Tuple(TxId, Lock))),
                    'purchases': IDL.Opt(IDL.Vec(IDL.Tuple(TxId, Purchase))),
                    'refunds': IDL.Opt(IDL.Vec(IDL.Tuple(TxId, Refund))),
                    'nextTxId': IDL.Opt(TxId),
                }),
            ],
            [],
            [],
        ),
        'purgeAssets': IDL.Func([IDL.Text, IDL.Opt(IDL.Text)], [Result], []),
        'purgeListings': IDL.Func([IDL.Text], [Result], []),
        'readLedger': IDL.Func([], [IDL.Vec(IDL.Opt(Token))], []),
        'settle': IDL.Func([TokenIdentifier], [Result_3], []),
        'stats': IDL.Func(
            [],
            [IDL.Nat64, IDL.Nat64, IDL.Nat64, IDL.Nat64, IDL.Nat, IDL.Nat, IDL.Nat],
            ['query'],
        ),
        'tokenId': IDL.Func([TokenIndex], [TokenIdentifier], ['query']),
        'tokens': IDL.Func([AccountIdentifier], [Result_2], ['query']),
        'tokens_ext': IDL.Func([AccountIdentifier], [Result_1], ['query']),
        'transfer': IDL.Func([TransferRequest], [TransferResponse], []),
        'upload': IDL.Func([IDL.Vec(IDL.Vec(IDL.Nat8))], [], []),
        'uploadClear': IDL.Func([], [], []),
        'uploadFinalize': IDL.Func([IDL.Text, Meta], [Result], []),
    });
    return LegendsNFT;
};
export const init = ({IDL}) => {
    return [];
};