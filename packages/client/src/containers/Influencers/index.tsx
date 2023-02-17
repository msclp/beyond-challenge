import React, { useState } from 'react'
import { Box, Card, CardBody, Flex, Heading, Link, ListItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, UnorderedList } from '@chakra-ui/react'
import { useApi } from '../../api'
import { Influencer } from '../../types'
import { getTopPerCountry, getTopPerCategory } from './utils'

const Influencers = () => {
  const { data, loading } = useApi<Influencer[]>('/influencers')
  const [selectedInfluencer, selectInfluencer] = useState<Influencer>()

  if (loading || !data) return null

  const perCountry = getTopPerCountry(data)
  const perCategory = getTopPerCategory(data)

  return (
    <Tabs onChange={() => { selectInfluencer(undefined) }}>
      <TabList>
        <Tab>Who are the #1 top influencers per category, by followers?</Tab>
        <Tab>Who are the #1 top influencers per country, by engagement avg?</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Flex alignItems="flex-start">
            <UnorderedList>
              {perCategory.map(({ category, influencer }) => (
                <Link key={category} onClick={() => { selectInfluencer(influencer)}}>
                  <ListItem>{category || 'Uncategorized'}</ListItem>
                </Link>
              ))}
            </UnorderedList>
            {selectedInfluencer && (
              <Box p="32">
                <Card maxW='sm'>
                  <CardBody>
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>{selectedInfluencer['instagram name']}</Heading>
                      <Text>Number of followers: {selectedInfluencer.Followers}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            )}
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex alignItems="flex-start">
            <UnorderedList>
              {perCountry.map(({ category, influencer }) => (
                <Link key={category} onClick={() => { selectInfluencer(influencer)}}>
                  <ListItem>{category}</ListItem>
                </Link>
              ))}
            </UnorderedList>
            {selectedInfluencer && (
              <Box p="32">
                <Card maxW='sm'>
                  <CardBody>
                    <Stack mt='6' spacing='3'>
                      <Heading size='md'>{selectedInfluencer['instagram name']}</Heading>
                      <Text>Average engagement: {selectedInfluencer['Engagement avg']}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              </Box>
            )}
          </Flex>
        </TabPanel>
        
      </TabPanels>
    </Tabs>
  )
}

export default Influencers
