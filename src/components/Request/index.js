import React from 'react'
import PropTypes from 'prop-types'
import Definitions from '../Definitions'
import Body from '../Body'

const Request = ({ data }) => {
  const { method, path, headers_formatted: headers, formatted, schema } = data
  return (
    <div>
      <Definitions title="method" description={method.toUpperCase()} />
      <Definitions title="path" description={path} />
      {!!Object.keys(headers).length && (
        <Definitions title="headers">
          {Object.entries(headers).map(([k, v]) => (
            <dl key={k}>
              <dt>{k}</dt>
              <dd>{JSON.stringify(v)}</dd>
            </dl>
          ))}
        </Definitions>
      )}
      {formatted && <Body formatted={formatted} schema={schema} />}
    </div>
  )
}

Request.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Request
