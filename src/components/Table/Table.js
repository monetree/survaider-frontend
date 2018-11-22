import React from 'react';

const Table = () => {
  return (
    <div class="pa4 bg-light-green">
      <div class="overflow-auto">
        <table class="f6 w-100 mw8 center bg-light-green shadow-5" cellspacing="0">
          <thead>
            <tr class="stripe-dark">
              <th class="fw6 tl pa3 bg-white">Name</th>
              <th class="fw6 tl pa3 bg-white">Username</th>
              <th class="fw6 tl pa3 bg-white">Email</th>
              <th class="fw6 tl pa3 bg-white">ID</th>
            </tr>
          </thead>
          <tbody class="lh-copy">
            <tr class="stripe-dark">
              <td class="pa3">Hassan Johnson</td>
              <td class="pa3">@hassan</td>
              <td class="pa3">hassan@companywithalongdomain.co</td>
              <td class="pa3">14419232532474</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">Taral Hicks</td>
              <td class="pa3">@hicks</td>
              <td class="pa3">taral@companywithalongdomain.co</td>
              <td class="pa3">72326219423551</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">Tyrin Turner</td>
              <td class="pa3">@tt</td>
              <td class="pa3">ty@companywithalongdomain.co</td>
              <td class="pa3">92325170324444</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">Oliver Grant</td>
              <td class="pa3">@oli</td>
              <td class="pa3">oliverg@companywithalongdomain.co</td>
              <td class="pa3">71165170352909</td>
            </tr>
            <tr class="stripe-dark">
              <td class="pa3">Dean Blanc</td>
              <td class="pa3">@deanblanc</td>
              <td class="pa3">dean@companywithalongdomain.co</td>
              <td class="pa3">71865178111909</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Table;
