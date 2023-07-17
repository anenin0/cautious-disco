export const getUserQuery = /* GraphQL */`
  query GetUser($email: String!) {
    user(by: {email: $email}) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedInUrl
    }
  }
`

export const createUserMutation = /* GraphQL */`
mutation CreateUser($input: UserCreateInput!) {
  userCreate(input: $input) {
    user {
      name
      email
      avatarUrl
      description
      githubUrl
      linkedInUrl
      id
    }
  }
}
`