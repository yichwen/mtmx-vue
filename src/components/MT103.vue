<template>
  <el-container style="margin: 10px">
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-link :underline="false" href="#block_structure">Block Structure</el-link>
        </el-menu-item>
        <el-menu-item index="2">
          <el-link :underline="false" href="#basic_header">Basic Header</el-link>
        </el-menu-item>
        <el-menu-item index="3">
          <el-link :underline="false" href="#application_header">Application Header</el-link>
        </el-menu-item>
        <el-menu-item index="4">
          <el-link :underline="false" href="#mt103_text">MT103 Text</el-link>
        </el-menu-item>
        <el-menu-item index="5">
          <el-link :underline="false" href="#trailer">Trailer</el-link>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <h1 style="margin-top:5px;">MT103 - Single Customer Credit Transfer</h1>
      <ul>
        <li>MT103 is a General Use message</li>
        <li>
          MT103 can be straight through processable if the message is properly
          formatted according to pre-agreed bilateral/multilateral rules
        </li>
        <!-- <li>
          two variants of MT103 exist and these are documented separately:
          <ul>
            <li>
              <span style="font-weight: bold">MT103 STP</span>
              <ul>
                <li>
                  it allows for the exchange of single customer credit transfers
                  using a network-validated, restricted set of fields and format
                  options of the MT103 to make it straight through processable
                </li>
              </ul>
            </li>
            <li>
              <span style="font-weight: bold">MT103 REMIT</span>
              <ul>
                <li>
                  requires registration in the Extended Remittance Information
                  MUG
                </li>
                <li>
                  this MUG allows its subscribers to exchange MT103 REMIT
                  messages with an extended amount of remittance information in
                  the additional field 77T Envelope Contents
                </li>
              </ul>
            </li>
          </ul>
        </li> -->
      </ul>

      <el-divider></el-divider>
      <h3 id="block_structure">Block Structure</h3>
      <el-table
        :data="blocks"
        border
        fit
        style="width: 100%"
        :header-cell-style="{ backgroundColor: '#409eff', color: 'white' }"
      >
        <el-table-column prop="id" label="Block Identifier" width="150px">
        </el-table-column>
        <el-table-column prop="name" label="Block Name" width="150px">
        </el-table-column>
        <el-table-column label="Mandatory" width="130px">
          <template slot-scope="scope">
            {{ scope.row.mandatory ? "Mandatory" : "Optional" }}
          </template>
        </el-table-column>
        <el-table-column label="Description">
          <template slot-scope="scope">
            <ul>
              <li v-for="(item, index) in scope.row.description" :key="index">
                {{ item }}
              </li>
            </ul>
          </template>
        </el-table-column>
      </el-table>

      <el-divider></el-divider>
      <h3 id="basic_header">Basic Header</h3>
      <el-table
        :data="basicHeader"
        border
        fit
        style="width: 100%"
        :header-cell-style="{ backgroundColor: '#409eff', color: 'white' }"
      >
        <el-table-column prop="id" label="#" width="50px"> </el-table-column>
        <el-table-column prop="name" label="Tag or Field Name" width="200px">
        </el-table-column>
        <el-table-column label="M/O" width="50px">
          <template slot-scope="scope">
            {{ scope.row.mandatory ? "M" : "O" }}
          </template>
        </el-table-column>
        <el-table-column label="Description">
          <template slot-scope="scope">
            <div v-html="scope.row.description"></div>
          </template>
        </el-table-column>
        <el-table-column prop="content" label="Content/Options" width="150px">
        </el-table-column>
        <el-table-column prop="example" label="Example" width="150px">
        </el-table-column>
      </el-table>

      <el-divider></el-divider>
      <h3 id="application_header">Application Header</h3>
      <p>Available soon.</p>

      <el-divider></el-divider>
      <h3 id="mt103_text">MT103 Text</h3>
      <p>Available soon.</p>

      <el-divider></el-divider>
      <h3 id="trailer">Trailer</h3>
      <p>Available soon.</p>

    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "MT103",
  methods: {
    handleOpen() {},
    handleClose() {},
  },
  data() {
    return {
      basicHeader: [
        {
          id: 1,
          name: "start of block indicator",
          mandatory: true,
          description: "<p>The character { indicates the beginning of a block.</p>",
          content: "left curly brace {",
          example: "{",
        },
        {
          id: 2,
          name: "block identifier",
          mandatory: true,
          description: "<p>1 to 3 alphanumeric characters used to define block contents Basic header block identiifer is 1.</p>",
          content: "3c",
          example: "1",
        },
        {
          id: 3,
          name: "separator",
          mandatory: true,
          description: "<p>The character : indicates the end of the block identifier.</p>",
          content: "colon :",
          example: ":",
        },
        {
          id: 4,
          name: "AppID",
          mandatory: true,
          description: `<The>The Application Identifier identifies the application within which the message is being sent or received. The available options are:</p><ul><li>F = FIN All user-to-user, FIN system and FIN service messages</li><li>A = GPA (General Purpose Application) Most GPA system and service messages</li>
<li>L = GPA Certain GPA service messages, for example, LOGIN, LAKs, ABORT</li><li>These values are automatically assigned by the SWIFT system and the user's CBT.</li></ul>
          `,
          content: "1a",
          example: "F",
        },
        {
          id: 5,
          name: "ServiceID",
          mandatory: true,
          description: `<p>The Service Identifier consists of two numeric characters. It identifies the type of data that is being sent or received and, in doing so, whether the message which follows is one of the following:</p>
<ul><li>A user-to-user message</li><li>a system message</li><li>a service message</li></ul> for example, a session control command, such as SELECT, or a logical acknowledgment, such as ACK/SAK/UAK.
Possible values are 01 = FIN/GPA or 21 = ACK/NAK
          `,
          content: "2n",
          example: "01",
        },
        {
          id: 6,
          name: "LTAddress",
          mandatory: true,
          description: `<p>The Logical Termial (LT) Address is a 12-character FIN address
It is the address of the sending LT for input messages or of the receiving LT for output messages, and includes the Branch Code
It consists of:</p><ul><li>the BIC 8 CODE (8 characters)</li><li>the Logical Terminal Code (1 upper case alphabetic character)</li>
<li>the BIC Branch Code (3 characters)</li></ul>
          `,
          content: "12x",
          example: "BANKFRPPAXXX",
        },
        {
          id: 7,
          name: "SessionNumber",
          mandatory: true,
          description: `<p>The Session Number identifies the session in which the message was transmitted. 
It is a four digits number that is automatically generated by the user's computer and padded with zeros.</p>
          `,
          content: "4n",
          example: "4321",
        },
        {
          id: 8,
          name: "SequenceNumber (ISN or OSN)",
          mandatory: true,
          description: `<p>The sequence number always consists of six digits. 
It is the Input Sequence Number (ISN) of the sender's current input session or the Output Sequence Number (OSN) of the receiver's current output session.
It is automatically generated by the user's computer and padded with zeros.</p>
          `,
          content: "6n",
          example: "123456",
        },
        {
          id: 9,
          name: "end of block indicator",
          mandatory: true,
          description: `<p>The Block identifier end tag.</p>
          `,
          content: "right curly brace }",
          example: "}",
        }
      ],
      blocks: [
        {
          id: 1,
          name: "Basic Header",
          mandatory: true,
          description: [
            "The only mandatory block is the basic header",
            "The basic header contains the general information that identifies the message, and some additional control information",
            "The FIN interface automatically builds the basic header",
          ],
        },
        {
          id: 2,
          name: "Application Header",
          mandatory: false,
          description: [
            "The application header contains information that is specific to the application",
            "The application header is required for messages that users, or the system and users, exchange",
            "Exceptions are session establishment and session closure",
          ],
        },
        {
          id: 3,
          name: "User Header",
          mandatory: false,
          description: ["The user header is an optional header"],
        },
        {
          id: 4,
          name: "Text",
          mandatory: false,
          description: ["The text is the actual data to transfer"],
        },
        {
          id: 5,
          name: "Trailers",
          mandatory: false,
          description: [
            "The trailer either indicates special circumstances that relate to message handling or contains security information",
          ],
        }
      ]
    }
  }
}
</script>
