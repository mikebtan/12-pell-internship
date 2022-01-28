import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout.js'
import { getMentors } from '../../utilities/MentorCalls.js'
import MentorCard from '../../components/MentorCard/MentorCard.js'

export default function MentorListings() {

  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const foundMentors = await getMentors();
      setMentors(foundMentors);
    }
    fetchMentors()
  }, [])

  return (
    <Layout>
      <div>
      {mentors.map((mentor) => (
        <MentorCard
          name={mentor.name}
          bio={mentor.bio} />
        ))}
      </div>
    </Layout>
  )}
