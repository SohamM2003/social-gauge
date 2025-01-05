import axios from 'axios';

const langFlowApiBaseUrl = process.env.API_BASE_URL;
const applicationToken = process.env.APPLICATION_TOKEN;

export class UserRepository {

  typeComp = async (data: any) => {
    console.log('[typeComp] : args', data);
    const flowIdOrName = process.env.TYPECOMP_FLOW_ID_OR_NAME;
    const tweaks = {
      "ChatOutput-qjlrL": {},
      "Agent-uiAu0": {},
      "AstraDB-BlQI1": {},
      "ParseData-22FW3": {},
      "Prompt-3NEcO": {},
      "ChatInput-XoXzz": {}
    };
    const result = await axios.post(
      `${langFlowApiBaseUrl}${flowIdOrName}?stream=false`,
      {
        input_value: data.input_value,
        input_type: 'chat',
        output_type: 'chat',
        tweaks,
      },
      {
        headers: {
          Authorization: `Bearer ${applicationToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('[typeComp] : result', result.data.outputs[0].outputs[0].results.message.text);
    return result.data.outputs[0].outputs[0].results.message.text;

  }

  engagement = async (data: any) => {
    console.log('[engagement] : args', data);
    const flowIdOrName = process.env.ENGAGEMENT_FLOW_ID_OR_NAME;
    const tweaks = {
      "ChatInput-MWVG7": {},
      "ChatOutput-220xf": {},
      "Agent-hbRDK": {},
      "Prompt-bxk8G": {},
      "AstraDB-BshdB": {},
      "ParseData-W9OWW": {},
      "File-hfAVo": {},
      "SplitText-iUAVF": {},
      "AstraDB-8ZiNO": {}
    };
    const result = await axios.post(
      `${langFlowApiBaseUrl}${flowIdOrName}?stream=false`,
      {
        input_value: data.input_value,
        input_type: 'chat',
        output_type: 'chat',
        tweaks,
      },
      {
        headers: {
          Authorization: `Bearer ${applicationToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('[engagement] : result', result.data.outputs[0].outputs[0].results.message.text);
    return result.data.outputs[0].outputs[0].results.message.text;

  }

  recommendations = async (data: any) => {
    console.log('[recommendations] : args', data);
    const flowIdOrName = process.env.RECOMMENDATION_FLOW_ID_OR_NAME;
    const tweaks = {
      'ChatInput-V1auq': {},
      'ChatOutput-hsKju': {},
      'Agent-lMIIP': {},
      'Prompt-hyDOq': {},
      'AstraDB-JVctE': {},
      'ParseData-0uOio': {},
      'File-WOns4': {},
      'SplitText-XAc1v': {},
      'AstraDB-RZl2R': {},
      'Agent-Q3SpG': {},
    };
    const result = await axios.post(
      `${langFlowApiBaseUrl}${flowIdOrName}?stream=false`,
      {
        input_value: data.input_value,
        input_type: 'chat',
        output_type: 'chat',
        tweaks,
      },
      {
        headers: {
          Authorization: `Bearer ${applicationToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('[recommendations] : result', result.data.outputs[0].outputs[0].results.message.text);
    return result.data.outputs[0].outputs[0].results.message.text;

  }

}