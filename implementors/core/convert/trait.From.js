(function() {var implementors = {
"clientd":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>&gt; for <a class=\"enum\" href=\"clientd/enum.ClientdError.html\" title=\"enum clientd::ClientdError\">ClientdError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/tiered_multi/struct.TieredMulti.html\" title=\"struct fedimint_api::tiered_multi::TieredMulti\">TieredMulti</a>&lt;<a class=\"struct\" href=\"mint_client/mint/struct.SpendableNote.html\" title=\"struct mint_client::mint::SpendableNote\">SpendableNote</a>&gt;&gt; for <a class=\"struct\" href=\"clientd/struct.TieredNoteCount.html\" title=\"struct clientd::TieredNoteCount\">TieredNoteCount</a>"]],
"fedimint_api":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.87/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>&gt; for <a class=\"struct\" href=\"fedimint_api/config/struct.ClientModuleConfig.html\" title=\"struct fedimint_api::config::ClientModuleConfig\">ClientModuleConfig</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/serde_json/1.0.87/serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>&gt; for <a class=\"struct\" href=\"fedimint_api/config/struct.ServerModuleConfig.html\" title=\"struct fedimint_api::config::ServerModuleConfig\">ServerModuleConfig</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/client/struct.ClientModule.html\" title=\"struct fedimint_api::core::client::ClientModule\">ClientModule</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/client/trait.IClientModule.html\" title=\"trait fedimint_api::core::client::IClientModule\">IClientModule</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/server/struct.ApiHandler.html\" title=\"struct fedimint_api::core::server::ApiHandler\">ApiHandler</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/server/trait.ModuleApiHandler.html\" title=\"trait fedimint_api::core::server::ModuleApiHandler\">ModuleApiHandler</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/server/struct.VerificationCache.html\" title=\"struct fedimint_api::core::server::VerificationCache\">VerificationCache</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/server/trait.ModuleVerificationCache.html\" title=\"trait fedimint_api::core::server::ModuleVerificationCache\">ModuleVerificationCache</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/server/struct.ServerModule.html\" title=\"struct fedimint_api::core::server::ServerModule\">ServerModule</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/server/trait.IServerModule.html\" title=\"trait fedimint_api::core::server::IServerModule\">IServerModule</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/struct.Input.html\" title=\"struct fedimint_api::core::Input\">Input</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/trait.ModuleInput.html\" title=\"trait fedimint_api::core::ModuleInput\">ModuleInput</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/struct.Output.html\" title=\"struct fedimint_api::core::Output\">Output</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/trait.ModuleOutput.html\" title=\"trait fedimint_api::core::ModuleOutput\">ModuleOutput</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/struct.SpendableOutput.html\" title=\"struct fedimint_api::core::SpendableOutput\">SpendableOutput</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/trait.ModuleSpendableOutput.html\" title=\"trait fedimint_api::core::ModuleSpendableOutput\">ModuleSpendableOutput</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/struct.PendingOutput.html\" title=\"struct fedimint_api::core::PendingOutput\">PendingOutput</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/trait.ModulePendingOutput.html\" title=\"trait fedimint_api::core::ModulePendingOutput\">ModulePendingOutput</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/struct.OutputOutcome.html\" title=\"struct fedimint_api::core::OutputOutcome\">OutputOutcome</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/trait.ModuleOutputOutcome.html\" title=\"trait fedimint_api::core::ModuleOutputOutcome\">ModuleOutputOutcome</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/core/struct.ConsensusItem.html\" title=\"struct fedimint_api::core::ConsensusItem\">ConsensusItem</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/core/trait.ModuleConsensusItem.html\" title=\"trait fedimint_api::core::ModuleConsensusItem\">ModuleConsensusItem</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/db/struct.Database.html\" title=\"struct fedimint_api::db::Database\">Database</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/db/trait.IDatabase.html\" title=\"trait fedimint_api::db::IDatabase\">IDatabase</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl&lt;'a, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_api/db/struct.DatabaseTransaction.html\" title=\"struct fedimint_api::db::DatabaseTransaction\">DatabaseTransaction</a>&lt;'a&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_api/db/trait.IDatabaseTransaction.html\" title=\"trait fedimint_api::db::IDatabaseTransaction\">IDatabaseTransaction</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'a,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.66/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_api/module/enum.ModuleError.html\" title=\"enum fedimint_api::module::ModuleError\">ModuleError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_api/struct.TransactionId.html\" title=\"struct fedimint_api::TransactionId\">TransactionId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/struct.TransactionId.html\" title=\"struct fedimint_api::TransactionId\">TransactionId</a>&gt; for Sha256"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.ParseIntError.html\" title=\"struct core::num::error::ParseIntError\">ParseIntError</a>&gt; for <a class=\"enum\" href=\"fedimint_api/enum.ParseAmountError.html\" title=\"enum fedimint_api::ParseAmountError\">ParseAmountError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ParseAmountError&gt; for <a class=\"enum\" href=\"fedimint_api/enum.ParseAmountError.html\" title=\"enum fedimint_api::ParseAmountError\">ParseAmountError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"fedimint_api/struct.PeerId.html\" title=\"struct fedimint_api::PeerId\">PeerId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/struct.PeerId.html\" title=\"struct fedimint_api::PeerId\">PeerId</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Amount&gt; for <a class=\"struct\" href=\"fedimint_api/struct.Amount.html\" title=\"struct fedimint_api::Amount\">Amount</a>"]],
"fedimint_bitcoind":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.66/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_bitcoind/enum.Error.html\" title=\"enum fedimint_bitcoind::Error\">Error</a>"],["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"fedimint_bitcoind/struct.BitcoindRpc.html\" title=\"struct fedimint_bitcoind::BitcoindRpc\">BitcoindRpc</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"fedimint_bitcoind/trait.IBitcoindRpc.html\" title=\"trait fedimint_bitcoind::IBitcoindRpc\">IBitcoindRpc</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"]],
"fedimint_ln":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_ln/contracts/incoming/struct.OfferId.html\" title=\"struct fedimint_ln::contracts::incoming::OfferId\">OfferId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln/contracts/incoming/struct.OfferId.html\" title=\"struct fedimint_ln::contracts::incoming::OfferId\">OfferId</a>&gt; for Sha256"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Hash&gt; for <a class=\"struct\" href=\"fedimint_ln/contracts/struct.ContractId.html\" title=\"struct fedimint_ln::contracts::ContractId\">ContractId</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_ln/contracts/struct.ContractId.html\" title=\"struct fedimint_ln::contracts::ContractId\">ContractId</a>&gt; for Sha256"]],
"fedimint_mint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_mint/struct.SignRequest.html\" title=\"struct fedimint_mint::SignRequest\">SignRequest</a>&gt; for <a class=\"struct\" href=\"fedimint_api/tiered_multi/struct.TieredMulti.html\" title=\"struct fedimint_api::tiered_multi::TieredMulti\">TieredMulti</a>&lt;<a class=\"struct\" href=\"fedimint_mint/struct.BlindNonce.html\" title=\"struct fedimint_mint::BlindNonce\">BlindNonce</a>&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/tiered/struct.InvalidAmountTierError.html\" title=\"struct fedimint_api::tiered::InvalidAmountTierError\">InvalidAmountTierError</a>&gt; for <a class=\"enum\" href=\"fedimint_mint/enum.MintError.html\" title=\"enum fedimint_mint::MintError\">MintError</a>"]],
"fedimint_rocksdb":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;DBCommon&lt;SingleThreaded, OptimisticTransactionDBInner&gt;&gt; for <a class=\"struct\" href=\"fedimint_rocksdb/struct.RocksDb.html\" title=\"struct fedimint_rocksdb::RocksDb\">RocksDb</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_rocksdb/struct.RocksDb.html\" title=\"struct fedimint_rocksdb::RocksDb\">RocksDb</a>&gt; for OptimisticTransactionDB"]],
"fedimint_server":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_server/epoch/struct.OutcomeHistory.html\" title=\"struct fedimint_server::epoch::OutcomeHistory\">OutcomeHistory</a>&gt; for <a class=\"struct\" href=\"fedimint_server/consensus/struct.ConsensusOutcomeConversion.html\" title=\"struct fedimint_server::consensus::ConsensusOutcomeConversion\">ConsensusOutcomeConversion</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_server/transaction/enum.TransactionError.html\" title=\"enum fedimint_server::transaction::TransactionError\">TransactionError</a>&gt; for <a class=\"enum\" href=\"fedimint_server/consensus/enum.TransactionSubmissionError.html\" title=\"enum fedimint_server::consensus::TransactionSubmissionError\">TransactionSubmissionError</a>"]],
"fedimint_sled":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Tree&gt; for <a class=\"struct\" href=\"fedimint_sled/struct.SledDb.html\" title=\"struct fedimint_sled::SledDb\">SledDb</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_sled/struct.SledDb.html\" title=\"struct fedimint_sled::SledDb\">SledDb</a>&gt; for Tree"]],
"fedimint_wallet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_wallet/keys/struct.CompressedPublicKey.html\" title=\"struct fedimint_wallet::keys::CompressedPublicKey\">CompressedPublicKey</a>&gt; for PublicKey"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.66/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet/enum.WalletError.html\" title=\"enum fedimint_wallet::WalletError\">WalletError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_wallet/txoproof/enum.PegInProofError.html\" title=\"enum fedimint_wallet::txoproof::PegInProofError\">PegInProofError</a>&gt; for <a class=\"enum\" href=\"fedimint_wallet/enum.WalletError.html\" title=\"enum fedimint_wallet::WalletError\">WalletError</a>"]],
"ln_gateway":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"ln_gateway/client/struct.GatewayClientBuilder.html\" title=\"struct ln_gateway::client::GatewayClientBuilder\">GatewayClientBuilder</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"ln_gateway/client/trait.IGatewayClientBuilder.html\" title=\"trait ln_gateway::client::IGatewayClientBuilder\">IGatewayClientBuilder</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.66/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt; for <a class=\"enum\" href=\"ln_gateway/enum.LnGatewayError.html\" title=\"enum ln_gateway::LnGatewayError\">LnGatewayError</a>"]],
"mint_client":[["impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;I&gt; for <a class=\"struct\" href=\"mint_client/api/struct.FederationApi.html\" title=\"struct mint_client::api::FederationApi\">FederationApi</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"mint_client/api/trait.IFederationApi.html\" title=\"trait mint_client::api::IFederationApi\">IFederationApi</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"fedimint_api/config/struct.ClientConfig.html\" title=\"struct fedimint_api::config::ClientConfig\">ClientConfig</a>&gt; for <a class=\"struct\" href=\"mint_client/api/struct.WsFederationConnect.html\" title=\"struct mint_client::api::WsFederationConnect\">WsFederationConnect</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"fedimint_core/enum.CoreError.html\" title=\"enum fedimint_core::CoreError\">CoreError</a>&gt; for <a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.CoinFinalizationError.html\" title=\"enum mint_client::mint::CoinFinalizationError\">CoinFinalizationError</a>&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/tiered/struct.InvalidAmountTierError.html\" title=\"struct fedimint_api::tiered::InvalidAmountTierError\">InvalidAmountTierError</a>&gt; for <a class=\"enum\" href=\"mint_client/mint/enum.CoinFinalizationError.html\" title=\"enum mint_client::mint::CoinFinalizationError\">CoinFinalizationError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>&gt; for <a class=\"enum\" href=\"mint_client/wallet/enum.WalletClientError.html\" title=\"enum mint_client::wallet::WalletClientError\">WalletClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"mint_client/struct.GatewayClientConfig.html\" title=\"struct mint_client::GatewayClientConfig\">GatewayClientConfig</a>&gt; for LightningGateway"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/api/enum.ApiError.html\" title=\"enum mint_client::api::ApiError\">ApiError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/wallet/enum.WalletClientError.html\" title=\"enum mint_client::wallet::WalletClientError\">WalletClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/mint/enum.MintClientError.html\" title=\"enum mint_client::mint::MintClientError\">MintClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mint_client/ln/enum.LnClientError.html\" title=\"enum mint_client::ln::LnClientError\">LnClientError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;CreationError&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/reqwest/0.11.12/reqwest/error/struct.Error.html\" title=\"struct reqwest::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"fedimint_api/tiered/struct.InvalidAmountTierError.html\" title=\"struct fedimint_api::tiered::InvalidAmountTierError\">InvalidAmountTierError</a>&gt; for <a class=\"enum\" href=\"mint_client/enum.ClientError.html\" title=\"enum mint_client::ClientError\">ClientError</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()