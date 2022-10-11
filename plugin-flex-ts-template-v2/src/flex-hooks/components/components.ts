import { Components } from "../../types/flex-hooks/Components";
import { addConferenceToCallCanvas } from "../../feature-library/conference/flex-hooks/components/CallCanvas";
import { addSupervisorCoachingPanelToAgent } from "../../feature-library/supervisor-barge-coach/flex-hooks/components/CallCanvas";
import { addConferenceToCallCanvasActions } from "../../feature-library/conference/flex-hooks/components/CallCanvasActions";
import { removeDirectoryFromInternalCalls } from "../../feature-library/internal-call/flex-hooks/components/CallCanvasActions";
import { addPendingActivityComponent } from "../../feature-library/activity-reservation-handler/flex-hooks/components/MainHeader";
import { addOutboundCallerIdSelectorToMainHeader } from "../../feature-library/caller-id/flex-hooks/components/OutboundDialerPanel";
import { addConferenceToParticipantCanvas } from "../../feature-library/conference/flex-hooks/components/ParticipantCanvas";
import { addSwitchToVideoToTaskCanvasHeader } from "../../feature-library/chat-to-video-escalation/flex-hooks/components/TaskCanvasHeader";
import { addVideoRoomTabToTaskCanvasTabs } from "../../feature-library/chat-to-video-escalation/flex-hooks/components/TaskCanvasTabs";
import { addSupervisorMonitorPanel } from "../../feature-library/supervisor-barge-coach/flex-hooks/components/TaskCanvasTabs";
import { replaceViewForCallbackAndVoicemail } from "../../feature-library/callback-and-voicemail/flex-hooks/components/TaskInfoPanel";
import { addSupervisorBargeCoachButtons } from "../../feature-library/supervisor-barge-coach/flex-hooks/components/TaskOverviewCanvas";
import { addInternalCallToDialerPanel } from "../../feature-library/internal-call/flex-hooks/components/OutboundDialerPanel";
import { replaceAndSetCustomCRMContainer } from "../../feature-library/enhanced-crm-container/flex-hooks/components/CRMContainer";
import { addChatTransferButton } from "../../feature-library/chat-transfer/flex-hooks/components/TaskCanvasHeader";
import { addChatTransferCustomization } from "../../feature-library/chat-transfer/flex-hooks/components/WorkerDirectory";

const componentHandlers: Components = {
  AgentDesktopView: [],
  CallCanvas: [addConferenceToCallCanvas, addSupervisorCoachingPanelToAgent],
  CallCanvasActions: [
    addConferenceToCallCanvasActions,
    removeDirectoryFromInternalCalls,
  ],
  CRMContainer: [replaceAndSetCustomCRMContainer],
  MainHeader: [addPendingActivityComponent],
  MessageListItem: [],
  NoTasksCanvas: [],
  OutboundDialerPanel: [
    addOutboundCallerIdSelectorToMainHeader,
    addInternalCallToDialerPanel,
  ],
  ParticipantCanvas: [addConferenceToParticipantCanvas],
  SideNav: [],
  TaskCanvasHeader: [addSwitchToVideoToTaskCanvasHeader, addChatTransferButton],
  TaskCanvasTabs: [addVideoRoomTabToTaskCanvasTabs, addSupervisorMonitorPanel],
  TaskInfoPanel: [replaceViewForCallbackAndVoicemail],
  TaskListButtons: [],
  TaskOverviewCanvas: [addSupervisorBargeCoachButtons],
  TeamsView: [],
  ViewCollection: [],
  WorkerCanvas: [],
  WorkerDirectory: [addChatTransferCustomization],
  WorkersDataTable: [],
};

export default componentHandlers;