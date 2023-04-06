(function() {var implementors = {
"fedimint_client":[["impl&lt;GC&gt; DatabaseRecord for <a class=\"struct\" href=\"fedimint_client/sm/executor/struct.ActiveStateKey.html\" title=\"struct fedimint_client::sm::executor::ActiveStateKey\">ActiveStateKey</a>&lt;GC&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;GC: <a class=\"trait\" href=\"fedimint_client/sm/trait.GlobalContext.html\" title=\"trait fedimint_client::sm::GlobalContext\">GlobalContext</a>,</span>"],["impl&lt;GC&gt; DatabaseRecord for <a class=\"struct\" href=\"fedimint_client/sm/executor/struct.InactiveStateKey.html\" title=\"struct fedimint_client::sm::executor::InactiveStateKey\">InactiveStateKey</a>&lt;GC&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;GC: <a class=\"trait\" href=\"fedimint_client/sm/trait.GlobalContext.html\" title=\"trait fedimint_client::sm::GlobalContext\">GlobalContext</a>,</span>"]],
"fedimint_core":[],
"fedimint_dummy_common":[["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_dummy_common/db/struct.ExampleKeyV0.html\" title=\"struct fedimint_dummy_common::db::ExampleKeyV0\">ExampleKeyV0</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_dummy_common/db/struct.ExampleKey.html\" title=\"struct fedimint_dummy_common::db::ExampleKey\">ExampleKey</a>"]],
"fedimint_ln_common":[["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.ContractKey.html\" title=\"struct fedimint_ln_common::db::ContractKey\">ContractKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.ContractUpdateKey.html\" title=\"struct fedimint_ln_common::db::ContractUpdateKey\">ContractUpdateKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.OfferKey.html\" title=\"struct fedimint_ln_common::db::OfferKey\">OfferKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.ProposeDecryptionShareKey.html\" title=\"struct fedimint_ln_common::db::ProposeDecryptionShareKey\">ProposeDecryptionShareKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.AgreedDecryptionShareKey.html\" title=\"struct fedimint_ln_common::db::AgreedDecryptionShareKey\">AgreedDecryptionShareKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_ln_common/db/struct.LightningGatewayKey.html\" title=\"struct fedimint_ln_common::db::LightningGatewayKey\">LightningGatewayKey</a>"]],
"fedimint_mint_client":[["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_mint_client/db/struct.NoteKey.html\" title=\"struct fedimint_mint_client::db::NoteKey\">NoteKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_mint_client/db/struct.NextECashNoteIndexKey.html\" title=\"struct fedimint_mint_client::db::NextECashNoteIndexKey\">NextECashNoteIndexKey</a>"]],
"fedimint_mint_common":[["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.NonceKey.html\" title=\"struct fedimint_mint_common::db::NonceKey\">NonceKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.ProposedPartialSignatureKey.html\" title=\"struct fedimint_mint_common::db::ProposedPartialSignatureKey\">ProposedPartialSignatureKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.ReceivedPartialSignatureKey.html\" title=\"struct fedimint_mint_common::db::ReceivedPartialSignatureKey\">ReceivedPartialSignatureKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.OutputOutcomeKey.html\" title=\"struct fedimint_mint_common::db::OutputOutcomeKey\">OutputOutcomeKey</a>"],["impl DatabaseRecord for <a class=\"enum\" href=\"fedimint_mint_common/db/enum.MintAuditItemKey.html\" title=\"enum fedimint_mint_common::db::MintAuditItemKey\">MintAuditItemKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_mint_common/db/struct.EcashBackupKey.html\" title=\"struct fedimint_mint_common::db::EcashBackupKey\">EcashBackupKey</a>"]],
"fedimint_server":[["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_server/db/struct.AcceptedTransactionKey.html\" title=\"struct fedimint_server::db::AcceptedTransactionKey\">AcceptedTransactionKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_server/db/struct.RejectedTransactionKey.html\" title=\"struct fedimint_server::db::RejectedTransactionKey\">RejectedTransactionKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_server/db/struct.DropPeerKey.html\" title=\"struct fedimint_server::db::DropPeerKey\">DropPeerKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_server/db/struct.EpochHistoryKey.html\" title=\"struct fedimint_server::db::EpochHistoryKey\">EpochHistoryKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_server/db/struct.LastEpochKey.html\" title=\"struct fedimint_server::db::LastEpochKey\">LastEpochKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_server/db/struct.ClientConfigSignatureKey.html\" title=\"struct fedimint_server::db::ClientConfigSignatureKey\">ClientConfigSignatureKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_server/db/struct.ConsensusUpgradeKey.html\" title=\"struct fedimint_server::db::ConsensusUpgradeKey\">ConsensusUpgradeKey</a>"]],
"fedimint_wallet_common":[["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.BlockHashKey.html\" title=\"struct fedimint_wallet_common::db::BlockHashKey\">BlockHashKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.UTXOKey.html\" title=\"struct fedimint_wallet_common::db::UTXOKey\">UTXOKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.RoundConsensusKey.html\" title=\"struct fedimint_wallet_common::db::RoundConsensusKey\">RoundConsensusKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.UnsignedTransactionKey.html\" title=\"struct fedimint_wallet_common::db::UnsignedTransactionKey\">UnsignedTransactionKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.PendingTransactionKey.html\" title=\"struct fedimint_wallet_common::db::PendingTransactionKey\">PendingTransactionKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.PegOutTxSignatureCI.html\" title=\"struct fedimint_wallet_common::db::PegOutTxSignatureCI\">PegOutTxSignatureCI</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"fedimint_wallet_common/db/struct.PegOutBitcoinTransaction.html\" title=\"struct fedimint_wallet_common::db::PegOutBitcoinTransaction\">PegOutBitcoinTransaction</a>"]],
"mint_client":[["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/db/struct.ClientSecretKey.html\" title=\"struct mint_client::db::ClientSecretKey\">ClientSecretKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/ln/db/struct.OutgoingPaymentKey.html\" title=\"struct mint_client::ln::db::OutgoingPaymentKey\">OutgoingPaymentKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/ln/db/struct.OutgoingPaymentClaimKey.html\" title=\"struct mint_client::ln::db::OutgoingPaymentClaimKey\">OutgoingPaymentClaimKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/ln/db/struct.OutgoingContractAccountKey.html\" title=\"struct mint_client::ln::db::OutgoingContractAccountKey\">OutgoingContractAccountKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/ln/db/struct.ConfirmedInvoiceKey.html\" title=\"struct mint_client::ln::db::ConfirmedInvoiceKey\">ConfirmedInvoiceKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/ln/db/struct.LightningGatewayKey.html\" title=\"struct mint_client::ln::db::LightningGatewayKey\">LightningGatewayKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/mint/db/struct.NoteKey.html\" title=\"struct mint_client::mint::db::NoteKey\">NoteKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/mint/db/struct.PendingNotesKey.html\" title=\"struct mint_client::mint::db::PendingNotesKey\">PendingNotesKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/mint/db/struct.OutputFinalizationKey.html\" title=\"struct mint_client::mint::db::OutputFinalizationKey\">OutputFinalizationKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/mint/db/struct.NextECashNoteIndexKey.html\" title=\"struct mint_client::mint::db::NextECashNoteIndexKey\">NextECashNoteIndexKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/mint/db/struct.NotesPerDenominationKey.html\" title=\"struct mint_client::mint::db::NotesPerDenominationKey\">NotesPerDenominationKey</a>"],["impl DatabaseRecord for <a class=\"struct\" href=\"mint_client/wallet/db/struct.PegInKey.html\" title=\"struct mint_client::wallet::db::PegInKey\">PegInKey</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()