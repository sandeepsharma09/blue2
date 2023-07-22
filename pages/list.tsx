import { NextPage } from 'next'
import { Text, Flex, Box } from 'components/primitives'
import Layout from 'components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import {
  useAllContractList,
  useContractMetadataWithAddress,
} from "@3rdweb-sdk/react";
import { useRemoveContractMutation } from "@3rdweb-sdk/react/hooks/useRegistry";
import { useMemo } from 'react'
// const IndexPage: NextPage = () => {

interface DeployedContractsProps {
  noHeader?: boolean;
  contractListQuery: ReturnType<typeof useAllContractList>;
  limit?: number;
}


  const IndexPage: React.FC<DeployedContractsProps> = ({
  noHeader,
  contractListQuery,
  limit = 10,
}) => {

console.log(contractListQuery);
//   const chainIdsWithDeployments = useMemo(() => {
//     const set = new Set<number>();
//     contractListQuery.data.forEach((contract) => {
//       set.add(contract.chainId);
//     });
//     return [...set];
//   }, [contractListQuery.data]);
// 

  return (
    <Layout>
      <Flex
        direction="column"
        align="center"
        css={{ py: '200px', px: '$3', textAlign: 'center' }}
      >
        <Box css={{ color: '$gray11', mb: '30px' }}>
          <FontAwesomeIcon icon={faFolderOpen} size="2xl" />
        </Box>
        <Text style="body1" color="subtle" css={{ mb: '$1' }}>
          List.
        </Text>
        <Text style="body1" color="subtle">
          The requested URL was not found on the server.
        </Text>
      </Flex>
    </Layout>
  )
}

export default IndexPage
